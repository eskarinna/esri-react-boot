// ACTION TYPES //
export const types = {
    REHYDRATE: 'persist/REHYDRATE',
    UPDATE_EXTENT: 'UPDATE_EXTENT',
    MAP_LOADED: 'MAP_LOADED',
    SET_FEATURES: 'SET_FEATURES',
    WEB_SCENE_START: 'WEB_SCENE_START',
    MAP_VIEW_START: 'MAP_VIEW_START',
}

// REDUCERS //
export const initialState = {
    loaded: false,
    currentExtent: null,
    features: []
};

export default(state = initialState, action) => {
    switch (action.type) {
        case types.REHYDRATE:
            return {
                ...state,
                currentExtent: action.payload.map ? action.payload.map.currentExtent : initialState.currentExtent,
            }
        case types.UPDATE_EXTENT:
            return {
                ...state,
                currentExtent: action.payload.extent
            }
        case types.MAP_LOADED:
            return {
                ...state,
                loaded: true
        }
        case types.SET_FEATURES:
            return {
                ...state,
                features: action.payload.features
            }
        default:
            return state;
    }
}

// ACTIONS //
export const actions = {
    updateExtent: (extent) => ({
        type: types.UPDATE_EXTENT,
        payload: {
            extent
        }
    }),
    mapLoaded: () => ({
        type: types.MAP_LOADED,
        payload: {}
    }),
    setFeatures: (features) => ({
        type: types.SET_FEATURES,
        payload: {
            features
        }
    }),
    startMap: (webmapId, mapOptions, user, node) => ({
        type: types.WEB_SCENE_START,
        payload: {
            webmapId: webmapId,
            mapOptions: mapOptions,
            user: user,
            node: node
        }
    }),
    startMapView: (mapConfig, node) => ({
        type: types.MAP_VIEW_START,
        payload: {
            mapConfig: mapConfig,
            node: node,
        }
    })
};