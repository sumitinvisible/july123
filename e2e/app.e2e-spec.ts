import { July011Page } from './app.po';

describe('july011 App', () => {
  let page: July011Page;

  beforeEach(() => {
    page = new July011Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
