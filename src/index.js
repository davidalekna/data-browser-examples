import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import sort from 'ramda/src/sort';
import DataBrowser, { getObjectPropertyByString } from 'react-data-browser';
import fieldReducer from './fieldReducer';
import accessibleColumns from './columns';
import { Title, Root } from './styles';
import { IconButton } from './components/buttons';
import {
  Table,
  TableBody,
  FixedTableHead,
  Row,
  RowItem,
  HeadCell,
  RowOptionsCell,
  Loading,
} from './components/table';

// NOTE: example not complete

class App extends React.Component {
  state = { rows: [], loading: true };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(rows => this.setState({ rows, loading: false }));
  }
  onStateChange = (action, { defaultSortMethod }) => {
    if (action.type === '__sort_data__') {
      this.setState(state => ({
        rows: sort(defaultSortMethod, state.rows),
      }));
    }
  };
  render() {
    return (
      <Root>
        <Title>{`Data Browser 🗄`}</Title>
        <DataBrowser
          debug
          columnFlex={['1 1 40%', '0 0 30%', '0 0 30%']}
          columns={accessibleColumns}
          onStateChange={this.onStateChange}
        >
          {({
            columnFlex,
            visibleColumns,
            selectAllCheckboxState,
            checkboxState,
            onSelection,
            checkboxToggle,
            viewType,
          }) => {
            const fixedColWidth = 40;
            if (this.state.loading) {
              return (
                <Loading
                  {...{ visibleColumns, columnFlex, numberOfRows: 20 }}
                />
              );
            }
            return (
              <Table>
                <FixedTableHead>
                  <HeadCell
                    style={{ width: fixedColWidth }}
                    flex="0 0 auto"
                    render={() => (
                      <input
                        type="checkbox"
                        checked={selectAllCheckboxState}
                        onChange={() =>
                          onSelection({
                            items: this.state.rows.map(item => item.id),
                          })
                        }
                      />
                    )}
                  />
                  {visibleColumns.map((cell, index) => (
                    <HeadCell
                      key={index}
                      selected={cell}
                      flex={columnFlex[index]}
                      render={props => <div {...props}>{cell.label}</div>}
                    />
                  ))}
                  <RowOptionsCell
                    head
                    width={fixedColWidth}
                    render={({ isOpen, ...props }) => (
                      <IconButton {...props} color={isOpen ? 'red' : '#555'}>
                        {viewType === 'LIST_VIEW' ? 'view_list' : 'view_module'}
                      </IconButton>
                    )}
                  />
                </FixedTableHead>
                <TableBody>
                  {this.state.rows.map((row, key) => (
                    <Row key={key} selectable>
                      <RowItem style={{ width: fixedColWidth }} flex="0 0 auto">
                        <input
                          type="checkbox"
                          id={row.id}
                          checked={checkboxState(row.id)}
                          onChange={() => checkboxToggle({ rowId: row.id })}
                        />
                      </RowItem>
                      {visibleColumns.map(
                        ({ label, sortField, isLocked }, index) => (
                          <RowItem
                            key={sortField}
                            flex={columnFlex[index]}
                            cursor="pointer"
                            checked={checkboxState(row.id)}
                            onClick={() =>
                              alert(`🦄 clicked on a row (id) ${row.id}`)
                            }
                          >
                            {isLocked && `🔒 `}
                            {fieldReducer(
                              getObjectPropertyByString(row, sortField),
                              sortField,
                            )}
                          </RowItem>
                        ),
                      )}
                      <RowOptionsCell
                        width={fixedColWidth}
                        checked={checkboxState(row.id)}
                        render={({ isOpen, ...props }) => (
                          <IconButton
                            {...props}
                            color={isOpen ? 'red' : '#999'}
                          >
                            more_horiz
                          </IconButton>
                        )}
                      />
                    </Row>
                  ))}
                </TableBody>
              </Table>
            );
          }}
        </DataBrowser>
      </Root>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
