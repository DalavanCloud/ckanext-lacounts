import json
import logging
from ckanext.harvest.harvesters import CKANHarvester
from ckanext.lacounts.harvest import helpers
log = logging.getLogger(__name__)


class LacountsCKANHarvester(CKANHarvester):

    def import_stage(self, harvest_object):

        # Update config
        if harvest_object.job.source.config:
            config = json.loads(harvest_object.job.source.config)
        else:
            config = {}
        # Set `remote_groups` to be able set groups in processors
        config['remote_groups'] = 'only_local'
        harvest_object.job.source.config = json.dumps(config)

        # Update package
        package = json.loads(harvest_object.content)
        package = helpers.process_package(package, harvest_object)
        harvest_object.content = json.dumps(package)

        return super(LacountsCKANHarvester, self).import_stage(harvest_object)