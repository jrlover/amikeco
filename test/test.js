  describe('reachable', function () {
    it('contains empty email field', function() {
      browser().navigateTo('/index.html');
      expect(element('#email').text()).toBe('');
    });
  });
