# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import pulumi
import pulumi.runtime
from .. import utilities, tables

class NamespaceAuthorizationRule(pulumi.CustomResource):
    listen: pulumi.Output[bool]
    """
    Grants listen access to this this Authorization Rule. Defaults to `false`.
    """
    manage: pulumi.Output[bool]
    """
    Grants manage access to this this Authorization Rule. When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the ServiceBus Namespace Authorization Rule resource. Changing this forces a new resource to be created.
    """
    namespace_name: pulumi.Output[str]
    """
    Specifies the name of the ServiceBus Namespace. Changing this forces a new resource to be created.
    """
    primary_connection_string: pulumi.Output[str]
    """
    The Primary Connection String for the ServiceBus Namespace authorization Rule.
    """
    primary_key: pulumi.Output[str]
    """
    The Primary Key for the ServiceBus Namespace authorization Rule.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which the ServiceBus Namespace exists. Changing this forces a new resource to be created.
    """
    secondary_connection_string: pulumi.Output[str]
    """
    The Secondary Connection String for the ServiceBus Namespace authorization Rule.
    """
    secondary_key: pulumi.Output[str]
    """
    The Secondary Key for the ServiceBus Namespace authorization Rule.
    """
    send: pulumi.Output[bool]
    """
    Grants send access to this this Authorization Rule. Defaults to `false`.
    """
    def __init__(__self__, __name__, __opts__=None, listen=None, manage=None, name=None, namespace_name=None, resource_group_name=None, send=None):
        """
        Manages a ServiceBus Namespace authorization Rule within a ServiceBus.
        
        :param str __name__: The name of the resource.
        :param pulumi.ResourceOptions __opts__: Options for the resource.
        :param pulumi.Input[bool] listen: Grants listen access to this this Authorization Rule. Defaults to `false`.
        :param pulumi.Input[bool] manage: Grants manage access to this this Authorization Rule. When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
        :param pulumi.Input[str] name: Specifies the name of the ServiceBus Namespace Authorization Rule resource. Changing this forces a new resource to be created.
        :param pulumi.Input[str] namespace_name: Specifies the name of the ServiceBus Namespace. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which the ServiceBus Namespace exists. Changing this forces a new resource to be created.
        :param pulumi.Input[bool] send: Grants send access to this this Authorization Rule. Defaults to `false`.
        """
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['listen'] = listen

        __props__['manage'] = manage

        __props__['name'] = name

        if not namespace_name:
            raise TypeError('Missing required property namespace_name')
        __props__['namespace_name'] = namespace_name

        if not resource_group_name:
            raise TypeError('Missing required property resource_group_name')
        __props__['resource_group_name'] = resource_group_name

        __props__['send'] = send

        __props__['primary_connection_string'] = None
        __props__['primary_key'] = None
        __props__['secondary_connection_string'] = None
        __props__['secondary_key'] = None

        super(NamespaceAuthorizationRule, __self__).__init__(
            'azure:eventhub/namespaceAuthorizationRule:NamespaceAuthorizationRule',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

