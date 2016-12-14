import { ComparePage } from './app.po';

describe('compare App', function() {
  let page: ComparePage;

  beforeEach(() => {
    page = new ComparePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
