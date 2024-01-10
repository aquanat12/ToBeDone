import RESTSerializer from '@ember-data/serializer/rest';


export default class TodoSerializer extends RESTSerializer {
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
       return this.normalize(primaryModelClass,payload[0]);
    }
}