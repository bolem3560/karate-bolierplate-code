package com.api.iposautomation.commonfunctions;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Random;
import java.util.regex.Pattern;

import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import com.google.common.collect.ArrayListMultimap;
import com.google.common.collect.Multimap;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import net.minidev.json.JSONObject;

public class Commonfunctions {

	public static Map<String, String> treatMap = new HashMap<>();
	public static Multimap<String, String> treatMapStatus = ArrayListMultimap.create();
	public static Multimap<String, String> treatyMap = ArrayListMultimap.create();
	public static JsonObject metadata = new JsonObject();

	
	
}
