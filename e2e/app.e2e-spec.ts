import { AngularExperimentsPage } from './app.po';

describe('angular-experiments App', () => {
   let page: AngularExperimentsPage;

   beforeEach(() => {
      page = new AngularExperimentsPage();
   });

   it('should display message saying app works', () => {
      page.navigateTo();
      expect(page.getParagraphText()).toEqual('App works :)');
   });
});
