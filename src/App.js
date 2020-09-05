import React from "react";
// import ReactDOM from "react-dom";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const chartData = [
  {
    label: "Venezuela",
    value: "290"
  },
  {
    label: "Saudi",
    value: "260"
  },
  {
    label: "Canada",
    value: "180"
  },
  {
    label: "Iran",
    value: "140"
  },
  {
    label: "Russia",
    value: "115"
  },
  {
    label: "UAE",
    value: "100"
  },
  {
    label: "US",
    value: "30"
  },
  {
    label: "China",
    value: "30"
  }
];

const chartConfigs = {
  type: "column2d", // The chart type
  width: "700", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      //Set the chart caption
      caption: "Countries With Most Oil Reserves [2017-18]",
      //Set the chart subcaption
      subCaption: "In MMbbl = One Million barrels",
      //Set the x-axis name
      xAxisName: "Country",
      //Set the y-axis name
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      //Set the theme for your chart
      theme: "fusion"
    },
    // Chart Data
    data: chartData
  }
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }

    this.getExchangeRates = this.getExchangeRates.bind();
  }

  // api call for USD to JPY
  getExchangeRates = () => {
    // tell server we want data from the "/data" endpoint
    fetch('/data')
    // after we get data, convert data to json format
    .then(res => res.json())
    // take json-ified data, and set it as the "data" state value
    .then(data => {
      console.log(data);
      this.setState({data: JSON.stringify(data)});
    });
  }

  render() {
    return (
    <div>
      <h1>DEMO GRAPH</h1>
      <ReactFC {...chartConfigs} />
      <br/>
      <h2>Get Exchange Rates from</h2>
      <button onClick={this.getExchangeRates}>USD to JPY</button>
      <div>
        {/*display value "data" from the state*/}
        {this.state.data}
      </div>
    </div>);
  }
}

export default App;