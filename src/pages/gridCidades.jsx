import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Table, Tooltip } from 'antd'

import { visualizaPontos } from '../actions/buscaPontosActions'

class GridCidades extends Component {
    constructor(props) {
        super(props)

        this.cidadesColumns = [{
            title: 'Estado',
            dataIndex: 'Estado',
            width: '45%'
        }, {
            title: 'Cidade',
            dataIndex: 'Nome',
            width: '45%'
        }, {
            title: 'Ação',
            dataIndex: 'acao',
            width: '10%',
            render: (text, record) => {
                return (
                    <div>
                        {
                            <div>
                                <Tooltip title="Visualizar Pontos">
                                    <button className="btn btn-sm btn-success" onClick={() => this.props.visualizaPontos(record)} style={{ marginRight: 10 }}>
                                        <i className="fa fa-search"></i>
                                    </button>
                                </Tooltip>
                            </div>
                        }
                    </div>
                )
            }
        }]
    }

    render() {
        return (
            <div>
                <Table rowKey="Nome"
                    bordered pagination={true}
                    dataSource={this.props.buscaPonto.cidades}
                    columns={this.cidadesColumns}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    buscaPonto: state.buscaPonto
})

const mapDispatchToProps = dispatch => bindActionCreators({
    visualizaPontos
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GridCidades)