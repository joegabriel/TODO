import { TODOPage } from './app.po';

describe('todo App', function() {
  let page: TODOPage;

  beforeEach(() => {
    page = new TODOPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
