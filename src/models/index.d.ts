import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type MeetupMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Meetup {
  readonly id: string;
  readonly title?: string | null;
  readonly image?: string | null;
  readonly address?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Meetup, MeetupMetaData>);
  static copyOf(source: Meetup, mutator: (draft: MutableModel<Meetup, MeetupMetaData>) => MutableModel<Meetup, MeetupMetaData> | void): Meetup;
}