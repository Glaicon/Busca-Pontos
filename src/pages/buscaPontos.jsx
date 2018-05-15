import React, { Component } from 'react'
import { Button, Input } from 'antd';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form'

import { getCidades, getCidadesComFiltro, stepChangedEstado, stepChangedCidade } from '../actions/buscaPontosActions'
import GridCidades from './gridCidades'

class BuscaPontos extends Component {

    componentWillMount() {
        this.props.getCidades();
    }

    render() {
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Buscar Pontos</h1>
                    </header>
                </div>
                <div className=">App-body">
                    <div className="row">
                        <label style={{ marginLeft: 12 }}>Cidade: </label>
                        <Input style={{ width: '20%', marginLeft: 10 }} id="cidade" onChange={this.props.stepChangedCidade} value={this.props.buscaPonto.cidade} />
                        <label style={{ marginLeft: 12 }}>Estado: </label>
                        <Input style={{ width: '20%' }} id="estado" onChange={this.props.stepChangedEstado} value={this.props.buscaPonto.estado} />
                        <Button style={{ marginLeft: 15 }} onClick={() => this.props.getCidadesComFiltro(this.props.buscaPonto.cidade, this.props.buscaPonto.estado)}>Buscar</Button>
                    </div>
                </div>
                <br />
                <GridCidades dataSource={this.props.buscaPonto.cidades} />
                <div className="App-rodape"> </div>
            </div>
        )
    }
}

BuscaPontos = reduxForm({ form: 'buscaPontos', destroyOnUnmount: true })(BuscaPontos);

const mapStateToProps = state => {
    return {
        buscaPonto: state.buscaPonto
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getCidades,
        getCidadesComFiltro,
        stepChangedCidade,
        stepChangedEstado
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BuscaPontos)