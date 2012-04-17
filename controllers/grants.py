from framework.controller import *


class Grants(Controller):

    def GET(self, action=None, param0=None):
        """Process a GET request to the grants page."""
        return self.render('grants')
