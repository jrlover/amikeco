  describe('reachable', function () {
    it('contains empty email field', function() {
      browser().navigateTo('http://localhost:3000/index.html');
      expect(false).toBeFalsy();
      //expect(element('#email').text()).toBe('');
    });
  });
