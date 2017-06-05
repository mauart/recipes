import { MyProjectAppPage } from './app.po';

describe('my-project-app App', () => {
  let page: MyProjectAppPage;

  beforeEach(() => {
    page = new MyProjectAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
