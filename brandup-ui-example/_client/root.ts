﻿import "./styles.less";
import { UIElement, UIControl } from "brandup-ui";

export class Elem extends UIControl<any> {
    get typeName(): string { return "Elem2"; }

    protected _onRender() {
    }
}

var elem = new Elem(null, document.body)