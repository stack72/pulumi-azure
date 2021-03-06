# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Logger(pulumi.CustomResource):
    api_management_name: pulumi.Output[str]
    """
    The name of the API Management Service. Changing this forces a new resource to be created.
    """
    application_insights: pulumi.Output[dict]
    """
    An `application_insights` block as documented below.
    """
    buffered: pulumi.Output[bool]
    """
    Specifies whether records should be buffered in the Logger prior to publishing. Defaults to `true`.
    """
    description: pulumi.Output[str]
    """
    A description of this Logger.
    """
    eventhub: pulumi.Output[dict]
    """
    An `eventhub` block as documented below.
    """
    name: pulumi.Output[str]
    """
    The name of this Logger, which must be unique within the API Management Service. Changing this forces a new resource to be created.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
    """
    def __init__(__self__, resource_name, opts=None, api_management_name=None, application_insights=None, buffered=None, description=None, eventhub=None, name=None, resource_group_name=None, __name__=None, __opts__=None):
        """
        Manages a Logger within an API Management Service.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] api_management_name: The name of the API Management Service. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] application_insights: An `application_insights` block as documented below.
        :param pulumi.Input[bool] buffered: Specifies whether records should be buffered in the Logger prior to publishing. Defaults to `true`.
        :param pulumi.Input[str] description: A description of this Logger.
        :param pulumi.Input[dict] eventhub: An `eventhub` block as documented below.
        :param pulumi.Input[str] name: The name of this Logger, which must be unique within the API Management Service. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if api_management_name is None:
            raise TypeError("Missing required property 'api_management_name'")
        __props__['api_management_name'] = api_management_name

        __props__['application_insights'] = application_insights

        __props__['buffered'] = buffered

        __props__['description'] = description

        __props__['eventhub'] = eventhub

        __props__['name'] = name

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        super(Logger, __self__).__init__(
            'azure:apimanagement/logger:Logger',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

