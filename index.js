//! **`` This "body" import is needed even though it's saying it's not being read.
import { body } from "./modules/dom-manipulation";

import { lookForOuterNavClass } from "./modules/event-handlers";

import "./style.css";

lookForOuterNavClass();
