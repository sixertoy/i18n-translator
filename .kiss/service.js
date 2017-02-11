import AbstractService from './../../core/abstracts/AbstractService';

class %%name%%Service extends AbstractService {

  %%methodName%% (livemap) {
    let url = '';
    url = AbstractService.getQueryURL(url, {});
    return this.request(url, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
  }

}

export default %%name%%Service;
