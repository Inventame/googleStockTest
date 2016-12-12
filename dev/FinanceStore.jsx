import { computed, action, observable, map } from 'mobx';

class GFStore {
	@observable channels = map()
	@action setChannel = (_channel, _company, _data) => {
		this.channels.set(_channel, { company: _company, data: _data });
	}
}

const gfStore = window.store = new GFStore();

export default gfStore;
