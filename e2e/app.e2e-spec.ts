import { ClicksolutionPage } from './app.po';

describe('clicksolution App', function() {
  let page: ClicksolutionPage;

  beforeEach(() => {
    page = new ClicksolutionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
