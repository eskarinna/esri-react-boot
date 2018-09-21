// Includes //
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as mapActions } from '../redux/reducers/webscene';
import styled from 'styled-components';

import WebScene from './esri/WebScene';
import Loading from './Loading';
import CardPanel from './CardPanel'

// Styled Components //
const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
`;

const MapWrap = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    position: relative;
    z-index: 0;
    overflow: hidden;
`;

// Class //
class Main extends Component {
    render() {
        return (
            <Container>
                <Loading isLoading={this.props.mapLoaded} />

                <MapWrap>
                    <WebScene
                        appConfig={this.props.appConfig}
                        mapState={this.props.map}
                        user={this.props.auth.user}
                        onMapLoaded={this.props.mapLoaded}
                        updateExtent={this.props.updateExtent}
                        features={this.props.features}
                    />
                </MapWrap>

                <CardPanel />
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    map: state.map,
    auth: state.auth,
    appConfig: state.config,
    config: state.config
})

const mapDispatchToProps = function (dispatch) {
    return bindActionCreators({
    ...mapActions,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)