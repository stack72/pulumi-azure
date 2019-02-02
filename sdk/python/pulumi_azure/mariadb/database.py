# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Database(pulumi.CustomResource):
    charset: pulumi.Output[str]
    """
    Specifies the Charset for the MariaDB Database, which needs [to be a valid MariaDB Charset](https://mariadb.com/kb/en/library/setting-character-sets-and-collations). Changing this forces a new resource to be created.
    """
    collation: pulumi.Output[str]
    """
    Specifies the Collation for the MariaDB Database, which needs [to be a valid MariaDB Collation](https://mariadb.com/kb/en/library/setting-character-sets-and-collations). Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the MariaDB Database, which needs [to be a valid MariaDB identifier](https://mariadb.com/kb/en/library/identifier-names/). Changing this forces a
    new resource to be created.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which the MariaDB Server exists. Changing this forces a new resource to be created.
    """
    server_name: pulumi.Output[str]
    """
    Specifies the name of the MariaDB Server. Changing this forces a new resource to be created.
    """
    def __init__(__self__, __name__, __opts__=None, charset=None, collation=None, name=None, resource_group_name=None, server_name=None):
        """
        Manages a MariaDB Database within a MariaDB Server
        
        :param str __name__: The name of the resource.
        :param pulumi.ResourceOptions __opts__: Options for the resource.
        :param pulumi.Input[str] charset: Specifies the Charset for the MariaDB Database, which needs [to be a valid MariaDB Charset](https://mariadb.com/kb/en/library/setting-character-sets-and-collations). Changing this forces a new resource to be created.
        :param pulumi.Input[str] collation: Specifies the Collation for the MariaDB Database, which needs [to be a valid MariaDB Collation](https://mariadb.com/kb/en/library/setting-character-sets-and-collations). Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the MariaDB Database, which needs [to be a valid MariaDB identifier](https://mariadb.com/kb/en/library/identifier-names/). Changing this forces a
               new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which the MariaDB Server exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] server_name: Specifies the name of the MariaDB Server. Changing this forces a new resource to be created.
        """
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not charset:
            raise TypeError('Missing required property charset')
        __props__['charset'] = charset

        if not collation:
            raise TypeError('Missing required property collation')
        __props__['collation'] = collation

        __props__['name'] = name

        if not resource_group_name:
            raise TypeError('Missing required property resource_group_name')
        __props__['resource_group_name'] = resource_group_name

        if not server_name:
            raise TypeError('Missing required property server_name')
        __props__['server_name'] = server_name

        super(Database, __self__).__init__(
            'azure:mariadb/database:Database',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

