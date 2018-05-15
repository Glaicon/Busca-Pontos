import axios from 'axios'
import swal from 'sweetalert'
import Util from '../../src/helpers/util'
import _ from 'lodash'

export function getCidades() {
    const request = axios.get(Util.getBaseUrl());
    return {
        type: 'GET_CIDADES',
        payload: request
    }
}

export function setCidades(cidades) {
    return {
        type: 'SET_CIDADES',
        payload: cidades
    }
}

export function stepChangedCidade(e) {
    return {
        type: 'STEP_CHANGED_CIDADE',
        payload: e.target.value
    }
}

export function stepChangedEstado(e) {
    return {
        type: 'STEP_CHANGED_ESTADO',
        payload: e.target.value
    }
}

export function carregandoCidades(carregando) {
    return {
        type: 'CARREGANDO_CIDADES',
        payload: carregando
    }
}
function getTodasCidades() {
    return new Promise((resolve, reject) => {
        axios.get(Util.getBaseUrl())
            .then((response) => {
                resolve(response.data)
            })
    })
}

export function getCidadesComFiltro(cidade, estado) {
    let todasCidades = []

    return dispatch => {
        getTodasCidades()
            .then((response) => {
                todasCidades = response
                let cidadesFiltradas = {
                    cidades: []
                }
                if (cidade && !estado) {
                    cidadesFiltradas.cidades = _.filter(todasCidades, function (item) { return _.lowerCase(item.Nome).indexOf(_.lowerCase(cidade)) > -1 })
                    dispatch(setCidades(cidadesFiltradas))
                }
                else if (cidade && estado) {
                    cidadesFiltradas.cidades = _.filter(todasCidades, function (item) { return _.lowerCase(item.Nome).indexOf(_.lowerCase(cidade)) > -1 && _.lowerCase(item.Estado).indexOf(_.lowerCase(estado)) > -1 })
                    dispatch(setCidades(cidadesFiltradas))
                } else if (!cidade && estado) {
                    cidadesFiltradas.cidades = _.filter(todasCidades, function (item) { return _.lowerCase(item.Estado).indexOf(_.lowerCase(estado)) > -1 })
                    dispatch(setCidades(cidadesFiltradas))
                } else {
                    dispatch(getCidades())
                }
            }
        )
    }
}

export function visualizaPontos(cidade) {

    var data = JSON.stringify({
        "Nome": cidade.Nome,
        "Estado": cidade.Estado
    })

    return dispatch => {

        axios.post(Util.getBaseUrlPontos(), data)
            .then(resp => {
                swal({ icon: "info", text: `A pontuação da Cidade ${cidade.Nome} é ${resp.data} ` })
            }
            ).catch(err => {
                swal({ icon: "warning", text: `${err.message}` })
            }
        )
    }
}
