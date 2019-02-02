# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Workflow(pulumi.CustomResource):
    access_endpoint: pulumi.Output[str]
    """
    The Access Endpoint for the Logic App Workflow
    """
    location: pulumi.Output[str]
    """
    Specifies the supported Azure location where the Logic App Workflow exists. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the Logic App Workflow. Changing this forces a new resource to be created.
    """
    parameters: pulumi.Output[dict]
    """
    A map of Key-Value pairs.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the Resource Group in which the Logic App Workflow should be created. Changing this forces a new resource to be created.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    workflow_schema: pulumi.Output[str]
    """
    Specifies the Schema to use for this Logic App Workflow. Defaults to `https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#`. Changing this forces a new resource to be created.
    """
    workflow_version: pulumi.Output[str]
    """
    Specifies the version of the Schema used for this Logic App Workflow. Defaults to `1.0.0.0`. Changing this forces a new resource to be create.d
    """
    def __init__(__self__, __name__, __opts__=None, location=None, name=None, parameters=None, resource_group_name=None, tags=None, workflow_schema=None, workflow_version=None):
        """
        Manages a Logic App Workflow.
        
        :param str __name__: The name of the resource.
        :param pulumi.ResourceOptions __opts__: Options for the resource.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the Logic App Workflow exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the Logic App Workflow. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] parameters: A map of Key-Value pairs.
        :param pulumi.Input[str] resource_group_name: The name of the Resource Group in which the Logic App Workflow should be created. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] workflow_schema: Specifies the Schema to use for this Logic App Workflow. Defaults to `https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#`. Changing this forces a new resource to be created.
        :param pulumi.Input[str] workflow_version: Specifies the version of the Schema used for this Logic App Workflow. Defaults to `1.0.0.0`. Changing this forces a new resource to be create.d
        """
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not location:
            raise TypeError('Missing required property location')
        __props__['location'] = location

        __props__['name'] = name

        __props__['parameters'] = parameters

        if not resource_group_name:
            raise TypeError('Missing required property resource_group_name')
        __props__['resource_group_name'] = resource_group_name

        __props__['tags'] = tags

        __props__['workflow_schema'] = workflow_schema

        __props__['workflow_version'] = workflow_version

        __props__['access_endpoint'] = None

        super(Workflow, __self__).__init__(
            'azure:logicapps/workflow:Workflow',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

