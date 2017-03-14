import { SmartLuxuryMarketingGroupPage } from './app.po';

describe('smart-luxury-marketing-group App', () => {
  let page: SmartLuxuryMarketingGroupPage;

  beforeEach(() => {
    page = new SmartLuxuryMarketingGroupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
