import { AppPlannerPage } from './app.po';

describe('app-planner App', () => {
  let page: AppPlannerPage;

  beforeEach(() => {
    page = new AppPlannerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
