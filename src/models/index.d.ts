import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type LinkTypeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LinksMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type KeywordsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type KeywordsLinksMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class LinkType {
  readonly id: string;
  readonly link_type: string;
  readonly icon?: string | null;
  readonly Links?: (Links | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<LinkType, LinkTypeMetaData>);
  static copyOf(source: LinkType, mutator: (draft: MutableModel<LinkType, LinkTypeMetaData>) => MutableModel<LinkType, LinkTypeMetaData> | void): LinkType;
}

export declare class Links {
  readonly id: string;
  readonly favicon?: string | null;
  readonly description?: string | null;
  readonly clicks?: number | null;
  readonly link_url: string;
  readonly linktypeID: string;
  readonly Keywords?: (KeywordsLinks | null)[] | null;
  readonly title?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Links, LinksMetaData>);
  static copyOf(source: Links, mutator: (draft: MutableModel<Links, LinksMetaData>) => MutableModel<Links, LinksMetaData> | void): Links;
}

export declare class Keywords {
  readonly id: string;
  readonly keyword: string;
  readonly linkss?: (KeywordsLinks | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Keywords, KeywordsMetaData>);
  static copyOf(source: Keywords, mutator: (draft: MutableModel<Keywords, KeywordsMetaData>) => MutableModel<Keywords, KeywordsMetaData> | void): Keywords;
}

export declare class KeywordsLinks {
  readonly id: string;
  readonly links: Links;
  readonly keywords: Keywords;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<KeywordsLinks, KeywordsLinksMetaData>);
  static copyOf(source: KeywordsLinks, mutator: (draft: MutableModel<KeywordsLinks, KeywordsLinksMetaData>) => MutableModel<KeywordsLinks, KeywordsLinksMetaData> | void): KeywordsLinks;
}