import "./reset.css";
import React from "react";
import ReactDOM from "react-dom";
import sort from "ramda/src/sort";
import { HeadCell, RowOptionsCell, IconButton } from "./components";
import {
  Root,
  Table,
  TableBody,
  FixedTableHead,
  Row,
  RowItem,
  Title
} from "./styles";
import DataBrowser, { getObjectPropertyByString } from "react-data-browser";
import fieldReducer from "./fieldReducer";

// NOTE: example not complete

const accessibleColumns = [
  { label: "name", sortField: "name", isLocked: true },
  { label: "user name", sortField: "username" },
  { label: "email", sortField: "email" },
  { label: "street", sortField: "address.street" },
  { label: "suite", sortField: "address.suite" },
  { label: "city", sortField: "address.city" },
  { label: "zipcode", sortField: "address.zipcode" },
  { label: "phone", sortField: "phone" },
  { label: "website", sortField: "website" },
  { label: "company name", sortField: "company.name" },
  { label: "catchPhrase", sortField: "catchPhrase" }
];

class App extends React.Component {
  state = { rows: [] };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(rows => this.setState({ rows }));
  }
  onStateChange = (action, { defaultSortMethod }) => {
    if (action.type === "__sort_data__") {
      this.setState(state => ({
        rows: sort(defaultSortMethod, state.rows)
      }));
    }
  };
  render() {
    const fixedColWidth = 40;
    return (
      <Root>
        <Title>{`Data Browser 🗄`}</Title>
        <DataBrowser
          debug
          columnFlex={["1 1 40%", "0 0 30%", "0 0 30%"]}
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
            viewType
          }) => (
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
                          items: this.state.rows.map(item => item.id)
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
                    <IconButton {...props} color={isOpen ? "red" : "#555"}>
                      {viewType === "LIST_VIEW" ? "view_list" : "view_module"}
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
                            sortField
                          )}
                        </RowItem>
                      )
                    )}
                    <RowOptionsCell
                      width={fixedColWidth}
                      checked={checkboxState(row.id)}
                      render={({ isOpen, ...props }) => (
                        <IconButton {...props} color={isOpen ? "red" : "#999"}>
                          more_horiz
                        </IconButton>
                      )}
                    />
                  </Row>
                ))}
              </TableBody>
            </Table>
          )}
        </DataBrowser>
      </Root>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
