'use strict';

const parse = require('./modules/parseHTML.js');
const {readCheckSheet, recordHistorySheet, checkMatches, recordCheckSheet} = require('../database/cloudStorage.js');
const {mode} = require('../tools/dictionaries.js');



const analysisSport = () =>{
	parse.openBrowser().then(() => {
		console.log('.')
		return parse.getHTML(parse.properties.pariMatchProps);
	}).then(() => {
		console.log('.')
		return parse.getHTML(parse.properties.ligaStavokProps);
	}).then(() => {
		console.log('.')
		return parse.getHTML(parse.properties.olimpProps);
	}).then(() => {
		console.log('.')
		return parse.getHTML(parse.properties.marathonBetProps);
	}).then(() => {
		console.log('.')
		return parse.getHTML(parse.properties.baltBetProps);
	}).then(() => {
		console.log('.')
		return parse.getHTML(parse.properties.winLineFootballProps);
	}).then(() => {
		console.log('.')
		return parse.getHTML(parse.properties.winLineTableTennisProps_1);
	}).then(() => {
		console.log('.')
		return parse.getHTML(parse.properties.winLineTableTennisProps_2);
	}).then(() => {
		console.log('.')
		return parse.getHTML(parse.properties.bet365Props);
	}).then(() => {
		console.log('.')
		return parse.getHTML(parse.properties.fonBetProps);
	}).then(() => {
		console.log('.')
		return parse.getHTML(parse.properties.betCityProps);
	}).then(() => {
		console.log('.')
		return parse.getHTML(parse.properties.leonFootballProps);
	}).then(() => {
		console.log('.')
		return parse.getHTML(parse.properties.leonTableTennisProps_1);
	}).then(() => {
		console.log('.')
		return parse.getHTML(parse.properties.leonTableTennisProps_2);
	}).then(() => {
		console.log('.')
		return parse.getHTML(parse.properties.williamHillProps);
	}).then(() => {
		console.log('.')
		return parse.getHTML(parse.properties.totoProps);
	}).then(() => {
		console.log('.')
		return parse.endParse();
	}).then(() => {
		console.log('Parse complete: ' + Date.now());
		for(let i = 0; i < mode.length; i++){
			checkMatches(mode[i]);
		}
		return 1;
	})
	
	.then(async() => {
		console.log('Check complete: ' + Date.now());
		for(let i = 0; i < mode.length; i++){
			await recordHistorySheet(mode[i]);
		}
		return 1;
	}).then(async() => {
		for(let i = 0; i < mode.length; i++){
			await recordCheckSheet(mode[i]);
		}
		return 1;
	})
	.then(() => {
		console.log('Record complete: ' + Date.now());
		console.log('----------------');
		return analysisSport();
	})
}



module.exports = {
	analysisSport
}


