// package: 
// file: types.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Fee extends jspb.Message { 
    getBasisPoint(): number;
    setBasisPoint(value: number): Fee;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Fee.AsObject;
    static toObject(includeInstance: boolean, msg: Fee): Fee.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Fee, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Fee;
    static deserializeBinaryFromReader(message: Fee, reader: jspb.BinaryReader): Fee;
}

export namespace Fee {
    export type AsObject = {
        basisPoint: number,
    }
}

export class Balance extends jspb.Message { 
    getBaseAmount(): number;
    setBaseAmount(value: number): Balance;

    getQuoteAmount(): number;
    setQuoteAmount(value: number): Balance;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Balance.AsObject;
    static toObject(includeInstance: boolean, msg: Balance): Balance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Balance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Balance;
    static deserializeBinaryFromReader(message: Balance, reader: jspb.BinaryReader): Balance;
}

export namespace Balance {
    export type AsObject = {
        baseAmount: number,
        quoteAmount: number,
    }
}

export class BalanceWithFee extends jspb.Message { 

    hasBalance(): boolean;
    clearBalance(): void;
    getBalance(): Balance | undefined;
    setBalance(value?: Balance): BalanceWithFee;


    hasFee(): boolean;
    clearFee(): void;
    getFee(): Fee | undefined;
    setFee(value?: Fee): BalanceWithFee;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BalanceWithFee.AsObject;
    static toObject(includeInstance: boolean, msg: BalanceWithFee): BalanceWithFee.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BalanceWithFee, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BalanceWithFee;
    static deserializeBinaryFromReader(message: BalanceWithFee, reader: jspb.BinaryReader): BalanceWithFee;
}

export namespace BalanceWithFee {
    export type AsObject = {
        balance?: Balance.AsObject,
        fee?: Fee.AsObject,
    }
}

export class Market extends jspb.Message { 
    getBaseAsset(): string;
    setBaseAsset(value: string): Market;

    getQuoteAsset(): string;
    setQuoteAsset(value: string): Market;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Market.AsObject;
    static toObject(includeInstance: boolean, msg: Market): Market.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Market, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Market;
    static deserializeBinaryFromReader(message: Market, reader: jspb.BinaryReader): Market;
}

export namespace Market {
    export type AsObject = {
        baseAsset: string,
        quoteAsset: string,
    }
}

export class MarketWithFee extends jspb.Message { 

    hasMarket(): boolean;
    clearMarket(): void;
    getMarket(): Market | undefined;
    setMarket(value?: Market): MarketWithFee;


    hasFee(): boolean;
    clearFee(): void;
    getFee(): Fee | undefined;
    setFee(value?: Fee): MarketWithFee;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketWithFee.AsObject;
    static toObject(includeInstance: boolean, msg: MarketWithFee): MarketWithFee.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketWithFee, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketWithFee;
    static deserializeBinaryFromReader(message: MarketWithFee, reader: jspb.BinaryReader): MarketWithFee;
}

export namespace MarketWithFee {
    export type AsObject = {
        market?: Market.AsObject,
        fee?: Fee.AsObject,
    }
}

export class Price extends jspb.Message { 
    getBasePrice(): number;
    setBasePrice(value: number): Price;

    getQuotePrice(): number;
    setQuotePrice(value: number): Price;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Price.AsObject;
    static toObject(includeInstance: boolean, msg: Price): Price.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Price, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Price;
    static deserializeBinaryFromReader(message: Price, reader: jspb.BinaryReader): Price;
}

export namespace Price {
    export type AsObject = {
        basePrice: number,
        quotePrice: number,
    }
}

export class PriceWithFee extends jspb.Message { 

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): Price | undefined;
    setPrice(value?: Price): PriceWithFee;


    hasFee(): boolean;
    clearFee(): void;
    getFee(): Fee | undefined;
    setFee(value?: Fee): PriceWithFee;

    getAmount(): number;
    setAmount(value: number): PriceWithFee;

    getAsset(): string;
    setAsset(value: string): PriceWithFee;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriceWithFee.AsObject;
    static toObject(includeInstance: boolean, msg: PriceWithFee): PriceWithFee.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriceWithFee, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriceWithFee;
    static deserializeBinaryFromReader(message: PriceWithFee, reader: jspb.BinaryReader): PriceWithFee;
}

export namespace PriceWithFee {
    export type AsObject = {
        price?: Price.AsObject,
        fee?: Fee.AsObject,
        amount: number,
        asset: string,
    }
}

export class AddressWithBlindingKey extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): AddressWithBlindingKey;

    getBlinding(): string;
    setBlinding(value: string): AddressWithBlindingKey;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddressWithBlindingKey.AsObject;
    static toObject(includeInstance: boolean, msg: AddressWithBlindingKey): AddressWithBlindingKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddressWithBlindingKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddressWithBlindingKey;
    static deserializeBinaryFromReader(message: AddressWithBlindingKey, reader: jspb.BinaryReader): AddressWithBlindingKey;
}

export namespace AddressWithBlindingKey {
    export type AsObject = {
        address: string,
        blinding: string,
    }
}
