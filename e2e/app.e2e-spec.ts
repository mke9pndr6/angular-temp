import { BmwCliPage } from './app.po';

describe('bmw-cli App', function() {
  let page: BmwCliPage;

  beforeEach(() => {
    page = new BmwCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
