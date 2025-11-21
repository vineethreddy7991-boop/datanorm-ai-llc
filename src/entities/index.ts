/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: services
 * Interface for Services
 */
export interface Services {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  serviceName?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  detailedDescription?: string;
  /** @wixFieldType image */
  serviceImage?: string;
  /** @wixFieldType text */
  keyBenefits?: string;
  /** @wixFieldType text */
  targetAudience?: string;
  /** @wixFieldType url */
  callToActionUrl?: string;
}
