import { AppPage } from './app.po';

describe('protractor-e2e-testing App', () => {
  let page: AppPage;

  
  beforeEach(() => {
    page = new AppPage();
  });

  it('Should display title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('end-end-testing');
  });


});
