import { SplendorAppPage } from './app.po';

describe('splendor-app App', () => {
  let page: SplendorAppPage;

  beforeEach(() => {
    page = new SplendorAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
