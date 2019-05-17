import * as React from 'react';

import ReactEcharts from 'echarts-for-react';
import data from '../src/data';
import styled from 'styled-components';

const WrapperProfile  = styled.div`
    margin: 0 auto;
    width: 1106px;
    height: auto;
    border: 1px solid ${props => props.theme.primary};
    border-top: 4px solid ${props => props.theme.primary};
    header {
        display: grid;
        grid-template-columns: 30% 70%;
        grid-template-rows: repeat(12, 8.33333%);
        place-items: start end;
        justify-content: end;
        .echarts-for-react {
            width: 800px;
            align-self: start;
            grid-column-start: 2;
            grid-column-end: 2;
            grid-row-start: 1;
            grid-row-end: 12;
        }
    }
`;
export default class Index extends React.Component {
    getSkillsOption = () => {
        return {
            title: {
                // text: '个人优势'
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#ccc'
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            radar: [
                {
                    indicator: [
                        { text: 'JS', max: 100 },
                        { text: 'HTML', max: 100 },
                        { text: 'CSS', max: 100 },
                        { text: 'Node', max: 100 },
                        { text: 'Java', max: 100 }
                    ],
                    center: ['25%', '40%'],
                    radius: 80
                }
            ],
            series: [
                {
                    type: 'radar',
                    tooltip: {
                        trigger: 'item'
                    },
                    itemStyle: { normal: { areaStyle: { type: 'default' }}},
                    data: [
                        {
                            value: [90, 80, 70, 90, 40]
                        }
                    ]
                },
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 274, name: '联盟广告' },
                        { value: 235, name: '视频广告' },
                        { value: 400, name: '搜索引擎' }
                    ].sort(function (a, b) { return a.value - b.value }),
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        };
    };

    render() {
        return (
            <WrapperProfile>
                <header>
                    <h1>前端攻城狮</h1>
                    <h2>齐金龙</h2>
                    <a mailto="arvin.qi@qq.com">arvin.qi@qq.com</a>
                    <a href="https://github.com/ArvinQi">https://github.com/ArvinQi</a>
                    <h6>上海市 长宁区 天山西路</h6>
                    <ReactEcharts
                        option={this.getSkillsOption()}
                    />
                </header>
            </WrapperProfile>
        );
    }
}