import { Tube345Page } from './app.po';

describe('tube345 App', function() {
  let page: Tube345Page;

  beforeEach(() => {
    page = new Tube345Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
