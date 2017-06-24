import { CardManagementPage } from './app.po';

describe('card-management App', () => {
  let page: CardManagementPage;

  beforeEach(() => {
    page = new CardManagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
