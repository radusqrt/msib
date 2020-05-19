import React from "react";
import { Table } from "reactstrap";

const mapToTitle = {
  angio: "Angiogeneza sau Antiangiogeneza",
  regenerare: "Regenerarea",
  adn: "Protecția ADN-ului",
  microbiom: "Microbiomul",
  imunitate: "Imunitatea",
};

const keyToColumnName = {
  angio: ["Angiogeneza", "Antiangiogeneza"],
  regenerare: ["Regenerare"],
  microbiom: ["Microbiom"],
  adn: ["ADN"],
  imunitate: ["Imunitate"],
};

const styles = {
  backgroundColor: "lightblue",
};

const RecommendationTable = (props) => {
  const { recommendation } = props;

  return (
    <div>
      {recommendation
        ? Object.keys(recommendation).map((key) => (
            <div key={key}>
              {" "}
              &nbsp;
              <h4>Alimente care stimulează: {mapToTitle[key].toLowerCase()}</h4>
              <Table dark>
                <thead>
                  <tr>
                    {Object.keys(recommendation[key][0]).map((column_key) => (
                      <th
                        key={column_key}
                        style={
                          keyToColumnName[key].includes(column_key)
                            ? styles
                            : null
                        }
                      >
                        {column_key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {recommendation[key].map((sample) => (
                    <tr key={JSON.stringify(sample)}>
                      {Object.keys(sample).map((column_key) => (
                        <td
                          key={JSON.stringify(sample) + column_key}
                          style={
                            keyToColumnName[key].includes(column_key)
                              ? styles
                              : null
                          }
                        >
                          {sample[column_key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ))
        : null}
    </div>
  );
};

export default RecommendationTable;
