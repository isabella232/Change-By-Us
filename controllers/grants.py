from framework.controller import *


class Grants(Controller):

    def GET(self, action=None, param0=None):
        """Process a GET request to the grants page."""
        print action
        if (action == 'apply'):
            return self.render('apply')
        return self.render('grants')
