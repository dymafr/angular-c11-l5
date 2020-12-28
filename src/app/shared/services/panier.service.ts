import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Ingredient } from "../interfaces/ingredient.interface";

@Injectable({ providedIn: "root" })
export class PanierService {
  public ingredients$: BehaviorSubject<Ingredient[]> = new BehaviorSubject(
    null
  );

  constructor() {}
}
