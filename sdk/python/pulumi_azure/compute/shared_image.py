# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import pulumi
import pulumi.runtime
from .. import utilities, tables

class SharedImage(pulumi.CustomResource):
    description: pulumi.Output[str]
    """
    A description of this Shared Image.
    """
    eula: pulumi.Output[str]
    """
    The End User Licence Agreement for the Shared Image.
    """
    gallery_name: pulumi.Output[str]
    """
    Specifies the name of the Shared Image Gallery in which this Shared Image should exist. Changing this forces a new resource to be created.
    """
    identifier: pulumi.Output[dict]
    location: pulumi.Output[str]
    """
    Specifies the supported Azure location where the Shared Image Gallery exists. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the Shared Image. Changing this forces a new resource to be created.
    """
    os_type: pulumi.Output[str]
    """
    The type of Operating System present in this Shared Image. Possible values are `Linux` and `Windows`.
    """
    privacy_statement_uri: pulumi.Output[str]
    """
    The URI containing the Privacy Statement associated with this Shared Image.
    """
    release_note_uri: pulumi.Output[str]
    """
    The URI containing the Release Notes associated with this Shared Image.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which the Shared Image Gallery exists. Changing this forces a new resource to be created.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the Shared Image.
    """
    def __init__(__self__, __name__, __opts__=None, description=None, eula=None, gallery_name=None, identifier=None, location=None, name=None, os_type=None, privacy_statement_uri=None, release_note_uri=None, resource_group_name=None, tags=None):
        """
        Manages a Shared Image within a Shared Image Gallery.
        
        > **NOTE** Shared Image Galleries are currently in Public Preview. You can find more information, including [how to register for the Public Preview here](https://azure.microsoft.com/en-gb/blog/announcing-the-public-preview-of-shared-image-gallery/).
        
        :param str __name__: The name of the resource.
        :param pulumi.ResourceOptions __opts__: Options for the resource.
        :param pulumi.Input[str] description: A description of this Shared Image.
        :param pulumi.Input[str] eula: The End User Licence Agreement for the Shared Image.
        :param pulumi.Input[str] gallery_name: Specifies the name of the Shared Image Gallery in which this Shared Image should exist. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] identifier
        :param pulumi.Input[str] location: Specifies the supported Azure location where the Shared Image Gallery exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the Shared Image. Changing this forces a new resource to be created.
        :param pulumi.Input[str] os_type: The type of Operating System present in this Shared Image. Possible values are `Linux` and `Windows`.
        :param pulumi.Input[str] privacy_statement_uri: The URI containing the Privacy Statement associated with this Shared Image.
        :param pulumi.Input[str] release_note_uri: The URI containing the Release Notes associated with this Shared Image.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which the Shared Image Gallery exists. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the Shared Image.
        """
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['description'] = description

        __props__['eula'] = eula

        if not gallery_name:
            raise TypeError('Missing required property gallery_name')
        __props__['gallery_name'] = gallery_name

        if not identifier:
            raise TypeError('Missing required property identifier')
        __props__['identifier'] = identifier

        if not location:
            raise TypeError('Missing required property location')
        __props__['location'] = location

        __props__['name'] = name

        if not os_type:
            raise TypeError('Missing required property os_type')
        __props__['os_type'] = os_type

        __props__['privacy_statement_uri'] = privacy_statement_uri

        __props__['release_note_uri'] = release_note_uri

        if not resource_group_name:
            raise TypeError('Missing required property resource_group_name')
        __props__['resource_group_name'] = resource_group_name

        __props__['tags'] = tags

        super(SharedImage, __self__).__init__(
            'azure:compute/sharedImage:SharedImage',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

