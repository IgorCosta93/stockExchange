import { connect } from 'react-redux';
import HomeWrapper from "../components/general/HomeWrapper";
import { GET_STOCK_EXCHANGE } from "../store/actions/stockExchange";

const mapStateToProps = state => {
    return {
        stockExchange: state.stockExchangeR
    };
};

const mapDispatchToProps = dispatch => {
    return {
        GET_STOCK_EXCHANGE: body => dispatch(GET_STOCK_EXCHANGE(body)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeWrapper);