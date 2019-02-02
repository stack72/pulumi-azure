# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import pulumi
import pulumi.runtime
from .. import utilities, tables

class CustomHostnameBinding(pulumi.CustomResource):
    app_service_name: pulumi.Output[str]
    """
    The name of the App Service in which to add the Custom Hostname Binding. Changing this forces a new resource to be created.
    """
    hostname: pulumi.Output[str]
    """
    Specifies the Custom Hostname to use for the App Service, example `www.example.com`. Changing this forces a new resource to be created.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which the App Service exists. Changing this forces a new resource to be created.
    """
    def __init__(__self__, __name__, __opts__=None, app_service_name=None, hostname=None, resource_group_name=None):
        """
        Manages a Hostname Binding within an App Service.
        
        :param str __name__: The name of the resource.
        :param pulumi.ResourceOptions __opts__: Options for the resource.
        :param pulumi.Input[str] app_service_name: The name of the App Service in which to add the Custom Hostname Binding. Changing this forces a new resource to be created.
        :param pulumi.Input[str] hostname: Specifies the Custom Hostname to use for the App Service, example `www.example.com`. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which the App Service exists. Changing this forces a new resource to be created.
        """
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not app_service_name:
            raise TypeError('Missing required property app_service_name')
        __props__['app_service_name'] = app_service_name

        if not hostname:
            raise TypeError('Missing required property hostname')
        __props__['hostname'] = hostname

        if not resource_group_name:
            raise TypeError('Missing required property resource_group_name')
        __props__['resource_group_name'] = resource_group_name

        super(CustomHostnameBinding, __self__).__init__(
            'azure:appservice/customHostnameBinding:CustomHostnameBinding',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

