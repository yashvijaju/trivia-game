package com.example.demo.model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class SubtractionThread extends Thread 
{

	private Lock lck = new ReentrantLock();
	public static ArrayList<Subtraction> arr = new ArrayList<Subtraction>();
	private Subtraction obj;
	public SubtractionThread(Subtraction object) {
		obj = object;
	}
	
	public void run() {	
		lck.lock();

		try {


			int length = arr.size();
			if (length < 10) {
				arr.add(obj);
			}
			else if(length == 10) {
				if(arr.get(9).getPlayerScore() < obj.getPlayerScore())
				{
					arr.set(9,obj);
				}
			}

			int n = arr.size();
			for (int i = 0; i < n-1; i++) {
				for (int j = 0; j < n-i-1; j++) {
					if (arr.get(j).getPlayerScore() < arr.get(j+1).getPlayerScore()) {
						Collections.swap(arr, j+1,j);
					}
				}
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		finally {
			lck.unlock();
		}		
	}
}
