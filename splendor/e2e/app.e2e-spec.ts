import { SplendorPage } from './app.po';

describe('splendor App', () => {
  let page: SplendorPage;

  beforeEach(() => {
    page = new SplendorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
