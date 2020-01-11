import { AngularAuthAppPage } from './app.po';

describe('angular-auth-app App', function() {
  let page: AngularAuthAppPage;

  beforeEach(() => {
    page = new AngularAuthAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
