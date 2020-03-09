import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getSummary } from "./dashBoardAction";
import ContentHeader from "../common/template/ContentHeader";
import Content from "../common/template/Content";
import ValueBox from "../common/widget/ValueBox";

class Dashboard extends Component {
    componentWillMount() {
        this.props.getSummary();
    }

    render() {
        const { credit, debt } = this.props.summary;
        return (
            <div>
                <ContentHeader title="Dashboard" small=" versão 1.0" />
                <Content>
                    <ValueBox
                        cols="12 4"
                        color="green"
                        icon="bank"
                        value={`R$ ${credit}`}
                        text="Total de Créditos"
                    />
                    <ValueBox
                        cols="12 4"
                        color="red"
                        icon="credit-card"
                        value={`R$ ${debt}`}
                        text="Total de Débitos"
                    />
                    <ValueBox
                        cols="12 4"
                        color="blue"
                        icon="money"
                        value={`R$ ${credit - debt}`}
                        text="Valor Consolidado"
                    />
                </Content>
            </div>
        );
    }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary });
const mapDispatchToProsp = dispatch =>
    bindActionCreators({ getSummary }, dispatch);

export default connect(mapStateToProps, mapDispatchToProsp)(Dashboard);
