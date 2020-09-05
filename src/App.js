import React, { Component } from 'react';
import { WidthProvider, Responsive } from "react-grid-layout";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import './App.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

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
  // width: "700", // Width of the chart
  // height: "400", // Height of the chart
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

const ReactGridLayout = WidthProvider(Responsive);

class App extends Component {
  
  state = { 
    layout : [
      {i: '1', x: 0, y: 0, w: 3, h: 2, minH: 2, maxH: 2},         // *** -- minH & maxH doesnt affect the grid items
      {i: '2', x: 1, y: 0, w: 4, h: 2, minH: 2, maxH: 2},
      {i: '3', x: 0, y: 1, w: 3, h: 2, minH: 2, maxH: 2},
      {i: '4', x: 1, y: 1, w: 1, h: 2, minH: 2, maxH: 2}
    ],
    resizeplotly: true,
  };

  onLayoutChange = (layout) => {
    this.setState({layout});
  }
  
  onResize = (layouts) => {
    this.setState({
      layout: layouts,
    });
  };
  
  render() {
    return (
      <div className="App">
        <ReactGridLayout
            rowHeight= {150}
            // cols={2}
            onResize={this.onResize}
            width={100}
            layout={this.state.layout}
            onLayoutChange={this.onLayoutChange}
            draggableHandle=".MyDragHandleClassName"
            draggableCancel=".MyDragCancel"
            breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
            cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
        >
            <div className="item" key={1}>
              <div className='MyDragHandleClassName'> 
                Drag from Here - <span className="text">1</span>
              </div>
              <div style={{marginTop: '80px'}}>Grid - 1</div>
            </div>
            <div className="item" key={2}>
              <div className='MyDragHandleClassName'> 
                Drag from Here - <span className="text">2</span>
              </div>
              <div style={{marginTop: '80px'}}>Grid - 2</div>
            </div>
            <div className="item" key={3}>
              <div className='MyDragHandleClassName'> 
                Drag from Here - <span className="text">3</span>
              </div>
              <div style={{marginTop: '80px'}}>Grid - 3</div>
            </div>
            <div className="item" id="item4" key={4}>
              <div className='MyDragHandleClassName'> 
                Drag from Here - <span className="text">4</span>
              </div>
              <ReactFC {...chartConfigs} className = "graph"/>
            </div>
        </ReactGridLayout>
        
      </div>
    );
  }
}

App.defaultProps = {
    rowHeight: 150,
    cols: 2, // to make grid item 50% or 100%
};

export default App;