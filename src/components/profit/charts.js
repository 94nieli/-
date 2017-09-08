import React, {Component} from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/component/dataZoom';
class Charts extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    this.setState({
      data: echarts.init(document.getElementById('chart'))
    })
  }

  render() {
    if (this.state.data) {
      let option = {
        xAxis: {
          type: 'value',
          name: '日期'
        },
        yAxis: {
          type: 'value',
          name: '单位/万元'
        },
        dataZoom: [
          {
            type: 'slider',
            xAxisIndex: 0,
            start: 0,
            end: 100
          }, {
            type: 'inside',
            xAxisIndex: 0,
            start: 0,
            end: 100
          }, {
            type: 'slider',
            yAxisIndex: 0,
            start: 0,
            end: 100
          }, {
            type: 'inside',
            yAxisIndex: 0,
            start: 0,
            end: 100
          }
        ],
        series: [
          {
            type: 'scatter', // 这是个『散点图』
            itemStyle: {
              normal: {
                opacity: 0.8
              }
            },
            symbolSize: function(val) {
              return val[2] * 40;
            },
            data: this.props.data
          }
        ]
      }
      this.state.data.setOption(option);
    }
  return (
    <div id="chart" style={{
      width: "75%",
      height: "100%",
      float: "left"
    }}></div>
  )
}
}
export default Charts;
